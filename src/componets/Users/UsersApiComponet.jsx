// import React from "react";
// import * as axios from 'axios'
// import Users from './Users'


// class UsersAC extends React.Component {

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&counnt=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.getUsers(response.data.items)
//             })

//     }
     
//     onPageChange = (pageNuber) => {
//         this.props.setCurrenPage(pageNuber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNuber}&counnt=${this.props.pageSize}`).then(response => {
//             this.props.getUsers(response.data.items)
//         })
//     }

    
//     render() {
//         return <Users 
//         totalUsersCount={this.props.totalUsersCount}
//         pageSize={this.props.pageSize}
//         currenPage={this.props.currenPage}
//         users={this.props.users}
//         followed={this.props.followed}
//         onPageChange={this.onPageChange}
//         />
//     }
// }

// export default (UsersAC)

