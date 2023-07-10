import LoadingBar from 'react-top-loading-bar'
import './App.css';
import Navbar from './components/Navbar'
import React from 'react'
import News from './components/News'
import {
  BrowserRouter,  
  Routes ,
  Route,

} from "react-router-dom";



export default class App extends React.Component {


  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }


  setProgress = (progress)=>{
    this.setState({progress: progress})
  }


    pageSize =5;

    render() {
        return (
            <>
             <BrowserRouter>
            <div>
             
          <Navbar/>
           <LoadingBar
           height={6}
        color='#f11946'
        progress={this.state.progress}
       
      />

            <Routes>


            <Route exact  path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>

            <Route exact  path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>

            <Route exact  path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>

            <Route exact  path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>

            <Route exact  path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route> 

            <Route exact  path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>


            <Route exact  path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>


            <Route exact  path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>

            </Routes>
         

                
            
            </div>
             </BrowserRouter>
            </>
        )
    }
}


