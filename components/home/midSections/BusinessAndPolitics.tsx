import Busniness from "./Busniness"
import Politics from "./Politics"

const BusinessAndPolitics = () => {
  return (
    <div className="flex mt-8 w-full gap-3 lg:gap-8">
      <Busniness/>
      <Politics/>
    </div>
  )
}

export default BusinessAndPolitics                