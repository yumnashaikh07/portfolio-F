import Servicecard from "@/app/components/servicecard";
import Herosection from "@/app/components/herosection";
import Skill from "@/app/components/skill";
import KeyTraits from "@/app/components/keytraits";
export default function Home() {
  return (
    <main >
      <Herosection/>
      <section>
        <Skill/>
      </section>
      <section>
        <Servicecard/>
      </section>
      
      <section>
        <KeyTraits/>
      </section>
    </main>
  );
}
