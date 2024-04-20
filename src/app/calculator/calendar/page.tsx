import SCHEDULES from '@/contants/calendar.json';

export default function CalendarPage() {
  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-5 py-10 sm:p-10 gap-10 sm:gap-20">
      <span className="text-xl sm:text-2xl font-bold text-center">2024 세시마을 달력</span>

      <div className="flex flex-row justify-evenly flex-wrap gap-5">
        {SCHEDULES.map(schedule => (
          <div key={schedule.event} className="flex flex-row h-16 items-center">
            <span className="text-lg sm:text-xl font-bold min-w-32 sm:min-w-36">{schedule.event}</span>

            <div className="flex flex-col flex-1 h-full">
              <span className="text-sm sm:text-base flex-1">{`음력: ${schedule.luna_start_date} ~ ${schedule.luna_end_date}`}</span>
              <span className="text-sm sm:text-base flex-1 text-red-500">{`양력: ${schedule.solar_start_date} ~ ${schedule.solar_end_date}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
