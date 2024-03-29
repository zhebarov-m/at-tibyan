const useImage = (props: JSX.Element | string): JSX.Element => {
    return typeof props === 'string' ? <img src={props} alt="image"/> : props
};

export default useImage;
