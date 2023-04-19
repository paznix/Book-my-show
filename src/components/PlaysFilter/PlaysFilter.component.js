import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";


const PlaysFilter = (props) => {
  return (
    <Disclosure>
    {({ open }) => (
      <>
      <Disclosure.Button className="py-2 flex items-center gap-3">
      {open ? <BiChevronUp /> : <BiChevronDown />}

       <span className={open ? "text-button" : "text-gray-700"}>
        {props.title}
       </span>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        <div className="flex item-center gap-3 flex-wrap">
         {props.tags.map((tag) => (
           <>
            <div className="border border-gray-300 bg-gray-100 bg-opacity-50 px-2 rounded">
            <span className="text-button">{tag}</span>
            </div>
           </>
         ))

         }
        </div>
      </Disclosure.Panel>
      </>
    )}
    </Disclosure>
  );
};

export default PlaysFilter;