import React from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../styles/commons/Wrappers"
import { StandardParagraphs } from "../../styles/commons/Paragraphs"
import { NormalButton } from "../../styles/commons/Buttons"

const TicketsSection = styled.section`
  padding: 5rem 0;

  .ticket-title {
    width: 100%;
    text-align: center;

    h2 {
      font-family: ${props => props.theme.fontSec};
    }
  }
  .buy-tickets {
    width: 100%;
    text-align: center;
  }
`

const Tickets = () => {
  return (
    <TicketsSection>
      <StandardWrapper>
        <div className="ticket-title">
          <h2>Tickets to Alberta Games</h2>
        </div>
        <StandardParagraphs>
          <p>
            Coming Soon… Purchase your tickets to the 4 days of games and events
          </p>
        </StandardParagraphs>
        <div className="buy-tickets">
          <NormalButton disabled="true">Buy Tickets</NormalButton>
        </div>
      </StandardWrapper>
    </TicketsSection>
  )
}

export default Tickets
