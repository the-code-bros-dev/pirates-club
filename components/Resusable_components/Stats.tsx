import StatCard from '../Cards/StatCard'
import { STATS } from '@/utils/data'

export default function Stats() {
  return (
    <section className="py-24 px-6 border-b border-[#161311]/8 bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <StatCard key={i} {...s} index={i} />
          ))}
        </div>
      </section>
  )
}
