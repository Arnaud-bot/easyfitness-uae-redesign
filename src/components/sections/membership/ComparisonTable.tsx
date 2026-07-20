import { Check, Minus } from 'lucide-react'
import { COMPARISON_ROWS, MEMBERSHIP_PLANS } from '@/data/membership'

function ComparisonCell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-accent" aria-hidden="true" />
    ) : (
      <Minus className="mx-auto h-4 w-4 text-gray-300" aria-hidden="true" />
    )
  }

  return <span className="text-sm text-gray-700">{value}</span>
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th scope="col" className="py-4 pr-4 text-sm font-medium text-gray-500">
              Feature
            </th>
            {MEMBERSHIP_PLANS.map((plan) => (
              <th key={plan.name} scope="col" className="px-4 py-4 text-center text-sm font-semibold text-black">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.feature} className="border-b border-gray-100 last:border-0">
              <th scope="row" className="py-4 pr-4 text-sm font-normal text-gray-700">
                {row.feature}
              </th>
              <td className="px-4 py-4 text-center">
                <ComparisonCell value={row.essential} />
              </td>
              <td className="px-4 py-4 text-center">
                <ComparisonCell value={row.premium} />
              </td>
              <td className="px-4 py-4 text-center">
                <ComparisonCell value={row.elite} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
