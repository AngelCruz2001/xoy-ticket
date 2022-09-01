import React from 'react'
import { Cell } from './Cell';
import { Row } from './Row';
import "./Table.scss"
export const Table = () => {
  return (
    <div className='table'>

      <div className="headers">
        <Row>

        </Row>
        <Cell />
      </div>

      <div className="body">

      </div>


    </div>
  )
}
