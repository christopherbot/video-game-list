import React from 'react'
import styled from 'styled-components'
import { Bold } from './helpers'

const Wrapper = styled.div`
  transition: max-height 400ms ease;
  max-height: ${props => props.show ? '500px' : 0};
  overflow: hidden;
`

const SystemInfo = ({ show, system }) => {
  return (
    <Wrapper show={show}>
      <Bold>Systems:</Bold>
      {
        system.systems.map(sys =>
          <div key={sys.id}>
            { sys.description && `${sys.description} -` } { sys.color }
          </div>
        )
      }
      <Bold>Cables:</Bold>
      {
        system.cables.map(cable =>
          <div key={cable}>
            { cable }
          </div>
        )
      }
      <Bold>Accessories:</Bold>
      {
        system.accessories.map(accessory =>
          <div key={accessory}>
            { accessory }
          </div>
        )
      }
      <Bold>Controllers:</Bold>
      {
        system.controllers.map(controller =>
          <div key={controller}>
            { controller }
          </div>
        )
      }
    </Wrapper>
  )
}

export default SystemInfo
