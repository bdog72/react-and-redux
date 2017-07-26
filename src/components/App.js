import React, { Component } from 'react'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBPS6_09eLW_IX8z4o1iRhAC0_uTBysM7U'

export default class App extends Component {
  constructor (props) {
    super()

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'beagles'}, (videos) => {
      this.setState({ videos })
    })
  }

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[1]} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
