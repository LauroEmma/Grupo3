import styled from "styled-components";

export const Doctorimg = styled.img`
    height: calc(860*0.9px);
    border-radius: calc(92*0.9px);
    @media (max-width: 1300px) {
        height: calc(860/3*2px);
        border-radius: 62.33px;
    }
    @media (max-width: 433px) {
        height: 0px;
        width: 0px;
    }
    @media (max-height: 530px){
        height: calc(860/6*2.8px);
        border-radius: calc(31.165*1.4px);
    }
`

export const Simbolo = styled.img`
    width: calc(40*0.9px);
    height: calc(40*0.9px);
    padding-left: calc(60*0.9px);
    @media (max-width: 1300px) {
        width: 26.6px;
        height: 26.6px;
        padding-left: 40px;
    }
    @media (max-height: 530px){
        width: calc(13.3*1.4px);
        height: calc(13.3*1.4px);
        padding-left: calc(20*1.4px);
    }
`

export const DivGap1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: calc(15*0.9px);
    width: calc(1000*0.9px);
    height: calc(50*0.9px);
    @media (max-width: 1300px) {
        gap: 10px;
        height: 33.3px;
        width: 666.6px;
    }
    @media (max-height: 530px){
        gap: calc(5*1.4px);
        height: calc(16.65*1.4px);
        width: calc(333.3*1.4px);
    }
`
export const Divimg = styled.div`
    width: calc(400*0.9px);
    @media (max-width: 1300px) {
        width: 266.6px;
    }
    @media (max-width: 614.6px) {
        height: 0px;
        width: 0px;
    }
    @media (max-height: 530px){
        width: calc(133.3*1.4px);
    }

`

export const InputC = styled.input`
    width: calc(170*0.9px);
    height: calc(57*0.9px);
    flex-shrink: 0; 
    border-radius: calc(80*0.9px);
    background: #72C7F6; 
    border-style: none;
    padding-left: calc(30*0.9px);
    font-size: calc(22*0.9px);
    @media (max-width: 1300px) {
        width: 113.33px;
        height: 38px;
        border-radius: 53.3px;
        padding-left: 20px;
        font-size: 14.6px;
}
    @media (max-height: 530px){
        width: calc(56.65*1.4px);
        height: calc(19*1.4px);
        border-radius: calc(26.65*1.4px);
        padding-left: calc(10*1.4px);
        font-size: calc(7.3*1.4px);
    }
`
export const Input1 = styled.input`
    width: calc(401*0.9px);
    height: calc(57*0.9px);
    flex-shrink: 0; 
    border-radius: calc(80*0.9px);
    background: #72C7F6; 
    border-style: none;
    padding-left: calc(30*0.9px);
    font-size: calc(22*0.9px);
    @media (max-width: 1300px) {
        width: 267.3px;
        height: 38px;
        border-radius: 53.3px;
        padding-left: 20px;
        font-size: 14.6px;
}
    @media (max-height: 530px){
        width: calc(134.65*1.4px);
        height: calc(19*1.4px);
        border-radius: calc(26.65*1.4px);
        padding-left: calc(10*1.4px);
        font-size: calc(7.3*1.4px);
    }
`

export const Fonte1 = styled.div`
    color: #FFF;
    font-size: calc(29*0.9px);
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
    padding-top: calc(10*0.9px);
    padding-bottom: calc(13*0.9px);
    width: calc(400*0.9px);
    height: calc(10*0.9px);
    flex-shrink: 0; 
    padding-left: calc(100*0.9px);
    @media (max-width: 1300px) {
        font-size: 19.3px;
        padding-top: 6.6px;
        width: 266.6px;
        height: 6.6px;
    }
    @media (max-height: 530px){
        font-size: calc(9.65*1.4px);
        padding-top: calc(3.3*1.4px);
        width: calc(133.3*1.4px);
        height: calc(3.3*1.4px);
    }
`

export const Fonte2 = styled.div`
    padding-left: calc(0*0.9px);
    width: calc(400*0.9px);
    height: calc(20*0.9px);
    color: #FDFDFD;
    font-size: calc(34*0.9px);
    font-style: normal;
    font-weight: 400;
    display: flex;
    @media (max-width: 1300px) {
        width: 266.6px;
        height: 13.6px;
        font-size: 22.6px;
        padding-left: 0px;
}
    @media (max-height: 530px){
        width: calc(133.3*1.4px);
        height: calc(7.8*1.4px);
        font-size: calc(11.3*1.4px);
    }
`
export const Fonte3 = styled.div`
    width: calc(500*0.9px);
    height: calc(55*0.9px);
    flex-shrink: 0; 
    color: #FDFDFD;
    font-size: calc(21*0.9px);
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    span {font-weight: 700; }
    @media (max-width: 1300px) {
        width: 333.33px;
        height: 36.6px;
        font-size: 14px;
}   
    @media (max-height: 530px){
        width: calc(166.665*1.4px);
        height: calc(18.3*1.4px);
        font-size: calc(7*1.4px);
    }
`


export const DivGap = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(30*0.9px);
    padding: calc(75*0.9px);
    padding-top: calc(50*0.9px);
    width: calc(441*0.9px);
    @media (max-width: 1300px) {
        gap: 20px;
        padding: 50px;
        padding-top: 33.3px;
        width: 294px;
}
    @media (max-height: 530px){
        gap: calc(10*1.4px);
        padding: calc(25*1.4px);
        padding-top: calc(16.65*1.4px);
        width: calc(147*1.4px);
    }
`

export const DivGap2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: calc(25*0.9px);
    @media (max-width: 1300px) {
        gap: 16.6px;
}
    @media (max-height: 530px){
        gap: calc(8.3*1.4px);
    }
`

export const DivFrame = styled.div`
    width: calc(986*0.9px);
    height: calc(860*0.9px);
    flex-shrink: 0; 
    border-radius: calc(92*0.9px);
    background: #13244D; 
    display: flex;
    flex-direction: row;
    @media (max-width: 1300px) {
        width: calc(986/3*2px);
        height: calc(860/3*2px);
        border-radius: 61.3px;
}
    @media (max-width: 614.6px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
    @media (max-height: 530px){
        width: calc(986/6*2.8px);
        height: calc(860/6*2.8px);
        border-radius: calc(31.65*1.4px);
    }
`
export const Divall = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #72C7f9;
    @media (max-width: 614.6px){
        background-color: #13244D;
    }
    @media (max-height: 530px){
        background-color: #72C7f9;
    }
`

export const Botao = styled.button`
    margin-top: calc(16*0.9px);
    width: calc(215*0.9px);
    height: calc(100*0.9px);
    flex-shrink: 0; 
    border-radius: calc(80*0.9px);
    background: transparent; 
    font-size: calc(23*0.9px);
    color: white;
    border: calc(2*0.9px) solid white;
    &:hover {
        cursor: pointer;
        color: black;
        background-color: #72C7F6;
    }
    @media (max-width: 1300px) {
        margin-top: 10.6px;
        width: 143.33px;
        height: 66.6px;
        border-radius: 53.3px;
        font-size: 15.3px;
}
    @media (max-height: 530px){
        margin-top: calc(5.3*1.4px);
        width: calc(71.665*1.4px);
        height: calc(33.3*1.4px);
        border-radius: calc(26.65*1.4px);
        font-size: calc(7.65*1.4px);
    }
`