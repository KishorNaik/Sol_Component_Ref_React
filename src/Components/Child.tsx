import React, { Component, MouseEvent } from "react";
import { Modal} from 'react-bootstrap';

interface ChildProps{
    
}

interface ChildState{
    IsDisplay:boolean;
}

export default class Child extends Component<ChildProps,ChildState>{

    constructor(props:ChildProps){
        super(props);

        this.state={
            IsDisplay:false
        }
        
    }

    public componentDidMount(){
       
    }

    private ModalPopUpStateHasChange=(isDisplay:boolean):void=>{
        this.setState({
            IsDisplay:isDisplay
        })
    }

    // Event Handler
    private OnCancelModal=(event:MouseEvent):void=>{
       this.ModalPopUpStateHasChange(false);
    }

    // Public Method
    public ShowModalPopUp=():void=>{
        console.log("Child : Show Modal PopUp")
        this.ModalPopUpStateHasChange(true);
        //alert("Show");
    }

    public render():JSX.Element{
        console.log("State:",this.state.IsDisplay);
       
        return (
            <React.Fragment>

            <Modal show={this.state.IsDisplay} onHide={this.OnCancelModal}>  
                <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
                <Modal.Body>This is a Modal Body</Modal.Body>  
                <Modal.Footer>  
                    <button className="btn btn-dark" onClick={this.OnCancelModal}>Close</button>
                    {/* <Button onClick={()=>this.handleModal()}>Save</Button>   */}
                </Modal.Footer>  
            </Modal>  
                  
               
            </React.Fragment>
        )
    }

}