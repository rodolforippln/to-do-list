import { Container } from "./styles";

type Item = {
    id: number;
    name: string;
    status: boolean;
}

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

const ItemListTask = ({ item, onChange }: Props) => {
    
    return (
        <Container status={item.status}>
            <div>
                <input 
                    id={`chkList${item.id}`}
                    type="checkbox" 
                    checked={item.status} 
                    onChange={e => onChange(item.id, e.target.checked)}                    
                />
                <label htmlFor={`chkList${item.id}`}>{item.name}</label>
                
            </div>            
            
        </Container>
    );
}

export default ItemListTask;