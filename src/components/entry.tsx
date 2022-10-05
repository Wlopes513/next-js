interface EntryProps {
    type?: 'text' | 'number',
    text: string | number,
    value: any,
    readOnly?: boolean,
    changeValue?: (value: any) => void,
}

export default function Entry(props: EntryProps) {
    const { text, type, value, readOnly, changeValue } = props;
    const typeInput = type ?? 'text';

    return (
        <div className="flex flex-col">
            <label className="mb-4">
                {text}
            </label>
            <input
                className={`border border-purple-500 rounded-lg focus: outline-none bg-gray-100 px-4 py-2 ${readOnly ? '' : 'focus:bg-white'}`}
                type={typeInput}
                value={value}
                readOnly={readOnly}
                onChange={(e) => changeValue?.(e.target.value)}
            />
        </div>
    )
}