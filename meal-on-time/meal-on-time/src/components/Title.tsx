interface Props {
    text: string;
}

function Title({ text }: Props) {
    return (
        <h2 className="text-center mt-4">
            {text}
        </h2>
    );
}

export default Title;