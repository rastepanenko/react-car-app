import React from 'react'

export default function MyTable() {
  
  

  return (
    <div>
      <table border="1" id="myTable">
        <thead>
          <tr>
            <th>Марка</th>
            <th>Модель</th>
            <th>КПП</th>
            <th>Состояние</th>
            <th>Год выпуска</th>
            <th>Комментарий</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody id="tBody">
        </tbody>
      </table>
    </div>
  )
}
