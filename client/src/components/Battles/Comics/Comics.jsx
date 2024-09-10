import Compare from '../../Compare/Compare'
import data from '../../../const'

export default function Comics() {
    const row = ['batman', 'vs', 'spiderman']

    return (
        <div>
            <Compare row={row} battles={data.comicsCategory} />
        </div>
    )
}
