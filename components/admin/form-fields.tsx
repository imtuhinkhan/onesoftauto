import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function FieldError({
  errors,
}: {
  errors?: string[];
}) {
  if (!errors?.length) return null;
  return <p className="text-sm text-destructive mt-1">{errors[0]}</p>;
}

export function CheckboxField({
  id,
  name,
  label,
  defaultChecked,
}: {
  id: string;
  name: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-sm cursor-pointer"
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        className={cn(
          "h-4 w-4 rounded border border-input accent-primary"
        )}
      />
      <span>{label}</span>
    </label>
  );
}

export function FormSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="font-medium text-lg border-b border-border/50 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );
}

