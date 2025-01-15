const Text = (props: { content: string }) => {
    // props로부터 content를 받아와서 사용
    const { content } = props;
    // props로 전달된 데이터 표시
    return <p className="text">{content}</p>
}

// 정의한 컴포넌트를 변수에 대입
const Message = (props: {}) => {
    const content1 = 'this is component';
    const content2 = 'message uses text component';

    return (
        <div>
        {/* content라는 키로 컴포넌트에 데이터 전달 */}
        <Text content={content1} />
        <Text content={content2} />
        </div>

    )
}

export default Message;