import React from 'react'

import { Switch, Route } from 'react-router-dom'

import CharacterTimeline from 'pages/Character/Timeline'
import CharacterAbout from 'pages/Character/About'
import OtherAbout from 'pages/Other/About'
import Home from 'pages/Home'
import Login from 'pages/Login'
import StoryTimeline from 'pages/Story/Timeline'
import StoryWrite from 'pages/Story/Write'

const Routes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/@:character/timeline">
      <CharacterTimeline />
    </Route>
    <Route path="/@:character/about">
      <CharacterAbout />
    </Route>
    <Route path="/@:character">
      <CharacterAbout />
    </Route>
    <Route path="/$:other">
      <OtherAbout />
    </Route>
    <Route path="/:story/timeline">
      <StoryTimeline />
    </Route>
    <Route path="/:story/write">
      <StoryWrite />
    </Route>
    <Route path="/:story">
      <StoryTimeline />
    </Route>
  </Switch>
)

export default Routes
