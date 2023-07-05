import React from 'react'

export default class Newsitem extends React.Component {


	render() {
	   let {title,description,imageUrl,author,newsUrl,publishedAt,source} = this.props
		return (
			<div className="my-3">
				<div className="card" >
				    <span className="position-absolute   translate-middle badge rounded-pill bg-danger" style={{left:'50%',zIndex:'1',top:'99%'}}>
    Artical By {source}
    </span>
		
  <img src={!imageUrl?"https://cdn.theathletic.com/app/uploads/2023/06/20071208/GettyImages-1490472252-1024x683.jpg":imageUrl} className="card-img-top" alt="..." />

  <div className="card-body" > 





    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>

   <center> <a style={{hover:"fontSize=30px"}} target="_blank" href={newsUrl} className="btn btn-sm btn-dark">Read More</a></center>
    <center> <div style={{fontSize: '10px'}} className="card-footer text-body-secondary">
   by {author} on {new Date (publishedAt).toGMTString()}
  </div></center>

  </div>
</div>
			</div>
		)
	}
}