import Compare from '../../Compare/Compare'
import data from '../../../const'

export default function Comics() {
    const row = ['hero1', 'vs', 'hero2']
    return (
        <div>
            <Compare row={row} battles={data.comicsCategory} topic={'Heros'} />
        </div>
    )
}
