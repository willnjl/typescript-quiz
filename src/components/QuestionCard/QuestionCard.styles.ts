import styled from "styled-components";


export const Wrapper = styled.li`
    max-width: 1100px;
    background-color: #ebfeff;
    border: 2px sold;
    border:  2px solid #0085a3;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    padding: 2rem;
`



type ButtonWrapperProps = {
    correct: boolean,
    userClicked: boolean
}


export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition:  all 0.2s ease-out;
    :hover{
        opacity: 0.8;
    }

    button{
        cursor: pointer;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        font-weight: 800;
        color: white;
        :disabled{
            opacity: 0.5;
        }
        background: ${({ correct, userClicked }) => 
            correct
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !correct && userClicked
                ? 'linear-gradient(90deg, #ff5656, #c16868)' 
                :'linear-gradient(90deg, #56ccff, #6eafb4)'
        };

        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
        text-shadow: 0px 1px 0px rgba(0,0,0,0.1);
    }
`