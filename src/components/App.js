import _ from 'lodash'
import React, { Component } from 'react'
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBPS6_09eLW_IX8z4o1iRhAC0_uTBysM7U'

export default class App extends Component {
  constructor (props) {
    super()

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('beagles')
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}
