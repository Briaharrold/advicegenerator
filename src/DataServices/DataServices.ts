import advice from "../Interface/interface";
const getAdvice = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice')
        const data: advice = await promise.json();
        return data;
}
export default getAdvice 