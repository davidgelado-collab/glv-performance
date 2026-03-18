import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Zap, Gauge } from "lucide-react";
import { carDatabase, type CarEngine } from "@/data/carDatabase";

interface TuningSearchProps {
  onRequestQuote?: (vehicle: string) => void;
}

const TuningSearch = ({ onRequestQuote }: TuningSearchProps) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  const brands = useMemo(() => carDatabase.map((b) => b.name), []);
  const models = useMemo(
    () => carDatabase.find((b) => b.name === brand)?.models.map((m) => m.name) || [],
    [brand]
  );
  const engines = useMemo(
    () =>
      carDatabase
        .find((b) => b.name === brand)
        ?.models.find((m) => m.name === model)
        ?.engines || [],
    [brand, model]
  );

  const selectedEngine: CarEngine | null = useMemo(
    () => engines.find((e) => e.name === engine) || null,
    [engines, engine]
  );

  const handleBrandChange = (value: string) => {
    setBrand(value);
    setModel("");
    setEngine("");
  };

  const handleModelChange = (value: string) => {
    setModel(value);
    setEngine("");
  };

  return (
    <section id="buscador" className="border-t border-border bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
            Base de datos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">
            Buscador Stage 1
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
            Selecciona tu vehículo y descubre la potencia que puedes obtener con nuestra reprogramación Stage 1.
          </p>
        </motion.div>

        {/* Selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="mx-auto mb-10 grid max-w-4xl gap-4 md:grid-cols-3"
        >
          <SelectField
            label="Marca"
            placeholder="Selecciona marca"
            options={brands}
            value={brand}
            onChange={handleBrandChange}
          />
          <SelectField
            label="Modelo"
            placeholder="Selecciona modelo"
            options={models}
            value={model}
            onChange={handleModelChange}
            disabled={!brand}
          />
          <SelectField
            label="Motor"
            placeholder="Selecciona motor"
            options={engines.map((e) => e.name)}
            value={engine}
            onChange={setEngine}
            disabled={!model}
          />
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {selectedEngine && (
            <motion.div
              key={engine}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-4xl"
            >
              {/* Header */}
              <div className="mb-6 rounded-sm border border-border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase">
                      {brand} {model}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {selectedEngine.name} · {selectedEngine.year} · {selectedEngine.fuel}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-sm bg-primary/10 px-4 py-2">
                    <Search className="h-4 w-4 text-primary" />
                    <span className="font-display text-sm font-bold text-primary">STAGE 1</span>
                  </div>
                </div>
              </div>

              {/* Power comparison */}
              <div className="grid gap-4 md:grid-cols-2">
                <PowerCard
                  icon={<Zap className="h-5 w-5" />}
                  title="Potencia"
                  unit="HP"
                  original={selectedEngine.originalHP}
                  tuned={selectedEngine.stage1HP}
                />
                <PowerCard
                  icon={<Gauge className="h-5 w-5" />}
                  title="Par Motor"
                  unit="Nm"
                  original={selectedEngine.originalTorque}
                  tuned={selectedEngine.stage1Torque}
                />
              </div>

              {/* CTA */}
              <div className="mt-6 rounded-sm border border-primary/30 bg-primary/5 p-6 text-center">
                <p className="mb-3 font-body text-sm text-muted-foreground">
                  ¿Quieres estos resultados en tu {brand} {model}?
                </p>
                <a
                  href="#contacto"
                  className="inline-block rounded-sm bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-150 hover:bg-primary/80"
                >
                  Solicitar Presupuesto
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

function SelectField({
  label,
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
}: {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block font-body text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none rounded-sm border border-border bg-card px-4 py-3 pr-10 font-body text-sm text-foreground transition-colors focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
}

function PowerCard({
  icon,
  title,
  unit,
  original,
  tuned,
}: {
  icon: React.ReactNode;
  title: string;
  unit: string;
  original: number;
  tuned: number;
}) {
  const gain = tuned - original;
  const pct = Math.round((gain / original) * 100);

  return (
    <div className="rounded-sm border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="font-body text-sm uppercase tracking-wider">{title}</span>
      </div>

      <div className="mb-4 flex items-end justify-between">
        <div>
          <div className="font-body text-xs text-muted-foreground">Original</div>
          <div className="font-display text-3xl font-bold">
            {original} <span className="text-base text-muted-foreground">{unit}</span>
          </div>
        </div>
        <div className="text-2xl text-muted-foreground">→</div>
        <div className="text-right">
          <div className="font-body text-xs text-primary">Stage 1</div>
          <div className="font-display text-3xl font-bold text-primary">
            {tuned} <span className="text-base">{unit}</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((tuned / (tuned * 1.2)) * 100, 100)}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full rounded-full bg-primary"
        />
        <div
          className="absolute top-0 h-full border-r-2 border-dashed border-muted-foreground/50"
          style={{ left: `${(original / (tuned * 1.2)) * 100}%` }}
        />
      </div>

      <div className="mt-3 text-right">
        <span className="rounded-sm bg-primary/10 px-2 py-1 font-display text-xs font-bold text-primary">
          +{gain} {unit} (+{pct}%)
        </span>
      </div>
    </div>
  );
}

export default TuningSearch;
