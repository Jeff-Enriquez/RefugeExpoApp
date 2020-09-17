import React, { useState, useEffect } from 'react';
import DropDown from './DropDown'
import RefugeUnplugged from './RefugeUnplugged'
import { youtubeAPI } from '../../secrets'

export default function Media() {
  const [playlistId, setPlaylistId] = useState({refugeUnplugged: 'PLD5e8pT-0fPQ3aoXrqdyIZdwapereXz1c'})
  const [page, setPage] = useState<string>('refugeUnplugged')
  const fetchData = async () => {
    const videos = []
    let nextPageToken = ''
    while(nextPageToken !== undefined){
      let response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&pageToken=${nextPageToken}&playlistId=${playlistId[page]}&key=${youtubeAPI}`)
      let data = await response.json()
      const content = await data.items
      for(let i = 0; i < content.length; i++){
        let id = content[i].snippet.resourceId.videoId
        let title = content[i].snippet.title
        videos.push([id, title])
      }
      nextPageToken = data.nextPageToken
    }
    console.log(`LENGTH: ${videos.length}`)
    console.log(videos)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
    <DropDown/>
    <RefugeUnplugged/>
    </>
  )
}