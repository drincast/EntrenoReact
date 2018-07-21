import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pagination extends Component{
  getNumberPage = (event) => {
    console.log(event);
    this.props.setCurrentFunctionDispache(event.target.innerHTML);
  }

  pages = () => {
    let posts = 4;
    let total = Math.ceil(posts/3);
    let init = 1;
    let end = 10;

    let list = [];

    if(total <= 10){
      end = total;
    }

    {/*<th key={i} onClick={(e) => {this.getNumberPage(e)}}>*/}
    let bar = () => {
      for(let i = init; i<=end; i++){
        list = list.concat(
          <th key={i} onClick={this.getNumberPage}>
            {i}
          </th>
        )
      }

      return list;
    }

    return(
      <div>
        <table>
          <tbody>
            <tr>
              {bar()}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  render(){
    return(
      <div>
        <h4>
          Pagination
        </h4>
        {this.pages()}
        <br /><br />
        <div>actual: {this.props.page.page}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        page: state.pagination
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentFunctionDispache: (data) => {
            dispatch({type: "SET_CURRENT", page: data});
            // dispatch(reset('syncValidation'));
        },
        errorLoginFunctionDispache: () =>{
            dispatch({type: "USER_ERROR"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
