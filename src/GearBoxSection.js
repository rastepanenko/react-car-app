import React from 'react'

export default function GearBoxSection() {
  return (
    <div>
      <div className='GearBoxSection'>
        <p>
          <input type="radio" value="МКПП" name="GearBox"/>МКПП
        </p>
        <p>
          <input type="radio" value="АКПП" name="GearBox"/>АКПП
        </p>
        <p>
          <input type="radio" value="Вариатор" name="GearBox"/>Вариатор
        </p>
        <p>
          <input type="radio" value="Робот" name="GearBox"/>Робот
        </p>
        </div>
    </div>
  )
}
