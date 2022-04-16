import { useState, KeyboardEvent } from "react";
import { Container } from "./styles";

type Props = {
    onEnter: (taskName: string) => void;
}

const AddTask = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleOnKeyUp = (e: KeyboardEvent) => {
        
        if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <Container>
          <div className="image">➕ </div>
          <input 
            type="text" 
            placeholder="Agregar nova tarefa"
            value={inputText}
            onKeyUp={handleOnKeyUp}
            onChange={(e) => setInputText(e.target.value)}
          />
          
          
        </Container>
    )
}

export default AddTask;