import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "../imageResults/imageResults";


class Search extends Component{
    state={
       searchText:'',
       apiUrl:'https://shibe.online/api',       
       images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(           
               `${this.state.apiUrl}/${
                    this.state.searchText
                }?count=100`                                            
             )
            .then(res=>this.setState({images:res.data}))
            .catch(err=>console.log(err));
            ;
            }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <div>
            <input type="text" 
            style=
            {{backgroundColor:'white',
            color:'black',
            marginLeft:120,
            marginTop:10,
            paddingTop:10,
            paddingLeft:5,
            fontSize:30,
            borderTopStyle:"hidden",
            borderRightStyle:"hidden",
            borderLeftStyle:"hidden",
            outline:"none",
            borderBottomStyle:"groove",
       
        }}
        placeholder="Type cats, shibes or birds"             
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
             />
<br />
{this.state.images.length>0 ?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}



export default Search;
//Author: Sonia Satam SE CSDS (2021-205) DJ Sanghvi College of Engineering 