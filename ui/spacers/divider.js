 import {Divider} from './styles'
 
 
 function TextDivider({children, ...props}) {
    return (
        <Divider>
            <hr/> <p>{children}</p> <hr/>
        </Divider>
    )
}

export default TextDivider