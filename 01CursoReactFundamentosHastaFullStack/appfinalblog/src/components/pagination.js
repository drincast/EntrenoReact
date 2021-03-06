import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Pagination extends Component{
  componentDidMount(){
    this.props.totalPostsFunctionDispache();
  }

  getNumberPage = (event) => {
    //console.log(event);
    this.props.setCurrentFunctionDispache(event.target.innerHTML);
  }

  pages = () => {
    let posts = this.props.pagination.total;
    let total = Math.ceil(posts/3);
    let init = 1;
    let end = 10;
    let list = [];

    //console.log('val(init, end, total, page)', init, end, total, this.props.pagination.page);

    if(total <= 10){
      end = total;
    }
    else if(this.props.pagination.page >= total-4)
    //inicio
    {
      init = total - 9;
      end = total;
    }
    //final
    else if(this.props.pagination.page - 4 <= 0){
      init = 1;
      end = 10;
    }
    //lo de mas
    else{
      init = this.props.pagination.page - 4;
      end = parseInt(this.props.pagination.page) + 5;
    }

    //console.log('val(init, end, total, page)', init, end, total, this.props.pagination.page);

    {/*<th key={i} onClick={(e) => {this.getNumberPage(e)}}>*/}
    let bar = () => {
      //console.log(init, end);
      for(let i = init; i <= end; i++){
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
        <div>actual: {this.props.pagination.page}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        pagination: state.pagination
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
      totalPostsFunctionDispache: () =>{
        axios.get('https://blog-api-u.herokuapp.com/v1/totalposts')
        .then((response) => {
          //console.log(response);
          dispatch({type: "SET_TOTAL", total: parseInt(response.data)});
        })
        .catch(function(error){
          console.log(error);
        });
      },
      setCurrentFunctionDispache: (data) => {
        dispatch({type: "SET_CURRENT", page: data});
        // dispatch(reset('syncValidation'));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
