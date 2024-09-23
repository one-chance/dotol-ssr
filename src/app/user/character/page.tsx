import { CharacterAuth, CharacterList } from '@/components/character';
import { getCharacterList, getGreetingMessage } from '@/actions/character.action';

export default async function CharacterPage() {
  const characters = await getCharacterList();

  console.log(await getGreetingMessage('감소셔틀@하자'));

  return (
    <div className="flex flex-col grow mx-auto px-2.5 py-5 sm:p-10 gap-10">
      <span className="text-xl sm:text-2xl font-semibold">캐릭터 관리</span>

      <div className="flex flex-col sm:flex-row gap-5">
        <CharacterAuth />

        <CharacterList list={characters?.data} />
      </div>
    </div>
  );
}
