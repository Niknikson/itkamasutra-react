import React from 'react'
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {

        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.acitvate}> {this.props.status}</span>
                    }   
                </div>
                <div >
                    {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deAcitvate} className={s.input} value={this.props.status} type="text" />
                    }
                    
                </div>
            </>
        )
    }
}

export default ProfileStatus