import { Field as FieldQuery } from "../../../lib/defintions";

export default function Field({ field }: { field: FieldQuery }) {
  if (field.type === 'radio') {
    return (
      <div className="flex relative gap-2 border border-node bg-roseWater text-white w-[90%] px-5 py-3 lg:py-4">
        <p>{field.name}</p>
        <div className="flex absolute right-1">
          {field.values?.map((value) => {
            const id = `${field.name}-${value}`;
            return (
              <div key={value}>
                <input
                  type="radio"
                  name={field.name}
                  value={value} 
                  checked={field.value === value}
                  onChange={field.onChange}
                  id={id}
                  className="hidden peer"
                />
                <label
                  htmlFor={id}
                  className="px-5 py-3 lg:py-4 border-l border-node cursor-pointer transition
                             peer-checked:bg-sageGreen"
                >
                  {value}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <textarea
        placeholder={field.name}
        className="border border-node bg-roseWater text-white w-[90%] px-5 py-3 outline-0 focus:border-2"
        rows={4}
        value={typeof field.value === "string" ? field.value : ""}
        onChange={field.onChange}
        name={field.name}
        required={true}
      />
    );
  }

  return (
    <input
      type={field.type}
      placeholder={field.name}
      value={typeof field.value === "string" ? field.value : ""}
      onChange={field.onChange}
      className="border border-node bg-roseWater text-white w-[90%] px-5 py-3 lg:py-4 outline-0 focus:border-2"
      name={field.name}
      required={field.type !== 'file'} 
    />
  );
}
