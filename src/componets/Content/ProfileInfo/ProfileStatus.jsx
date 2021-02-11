import React from 'react'
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

 
    acitvate = () => {
        this.setState({
            editMode: true
        }) 
    }
    
    deAcitvate = () => {
        this.setState({
            editMode: false
        })
        this.props.upDateStatusThunk(this.state.status)
    }

    onStatusChanch = (e) => {
        
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
         }
    }
 

    render() {

        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.acitvate}> {this.props.status || '-----'}</span>
                    }   
                </div>
                <div >
                    {this.state.editMode &&
                        <input value={this.state.status} onChange={this.onStatusChanch} autoFocus={true} onBlur={this.deAcitvate} className={s.input}  type="text" />
                    }
                    
                </div>
            </>
        )
    }
}

export default ProfileStatus