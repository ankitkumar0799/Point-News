import React from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from "prop-types";

export default class News extends React.Component {
	static defaultProps = {
		country: "in",
		pageSize: 8,
		category: "general",
	};
	static propTypes = {
		country: PropTypes.array,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	};

	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	constructor(props) {
		super(props);

		this.state = {
			articles: [],
			loading: true,
			page: 1,
			totalResults: 0,
		};
		document.title = `${this.capitalizeFirstLetter(
			this.props.category
		)} - PointNews`;
	}

	async updateNews() {
		this.props.setProgress(20);
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
		this.setState({ loading: true });
				this.props.setProgress(60);
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
				this.props.setProgress(80);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
		this.props.setProgress(100);
	}
	async componentDidMount() {
		this.updateNews();
	}

	topFunction = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	handlePrevClick = async () => {
		console.log("Previous");
		// 	let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e79481262eec490799910179fb4d6aa1&page=${this.state.page - 1}&pagesize=${this.this.props.pageSize}`;
		// let data = await fetch(url)
		// let parsedData = await data.json()
		// this.setState({loading:true})
		// 	this.setState({
		// 		page: this.state.page - 1,
		// 		articles: parsedData.articles,
		// 		loading:false

		// 	})
		this.setState({ page: this.state.page - 1 });
		this.updateNews();
	};

	handleNextClick = async () => {
		console.log("Next");
		// 	if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {

		// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e79481262eec490799910179fb4d6aa1&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
		// this.setState({loading:true})
		// let data = await fetch(url)
		// let parsedData = await data.json()

		// 	this.setState({
		// 		page: this.state.page + 1,
		// 		articles: parsedData.articles,
		// 		loading:false

		// 	})
		this.setState({ page: this.state.page + 1 });
		this.updateNews();
	};

	fetchMoreData = async()=>{
		this.setState({page: this.state.page + 1})
				const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;

		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,

		});
	}



	render() {
		console.log("render");
		return (
			<div className="container my-3">
				<h1 className="text-center" style={{ margin: "35px 0px" }}>
					PointNews - Top HeadLines - {this.props.category}
				</h1>
				{this.state.loading && <Spinner/>}
				
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Spinner/>}
				>
				<div className="container">
					<div className="row">
						{this.state.articles.map((element) => {
							return (
								<div className="col-md-4" key={element.url}>
									<Newsitem
										imageUrl={element.urlToImage}
										title={
											element.title ? element.title : ""
										}
										description={
											element.description
												? element.description
												: ""
										}
										publishedAt={
											element.publishedAt
												? element.publishedAt
												: ""
										}
										author={
											element.author
												? element.author
												: "unknown"
										}
										
										newsUrl={element.url}
										source={element.source.name}
									/>
								</div>
							);
						})}
					</div>
					</div>
				</InfiniteScroll>
				<div className="container">
					<div
						className=" d-flex justify-content-between"
						role="group"
						aria-label="Basic example"
					>


						<button
							type="button"
							className="btn btn-danger"
							onClick={this.topFunction}
						>
							Go Top
						</button>


					</div>
				</div>
			</div>
		);
	}
}
