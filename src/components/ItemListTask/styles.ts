import styled from 'styled-components';

type ContainerProps = {
    status: boolean;
}
export const Container = styled.section(({ status }: ContainerProps) => (
    `
    max-width: 520px;
    margin: 20px auto;
    
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: var(--gray-800);
        padding: 10px;
        border: 1px solid var(--gray-700);  
        flex: 1;      
    }  
    
    label {
        text-decoration: ${status ? 'line-through' : 'initial'};
        color: ${status ? 'gray' : 'white'};
        &:hover {
            cursor: pointer;
        }
    }

    input {
        cursor: pointer;
    }


`
))