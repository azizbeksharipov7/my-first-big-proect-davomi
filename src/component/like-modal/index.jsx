import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import LikeItems from "./like-items";
import { UseMainContext } from "../../context/useMainContext";
 
export function LikeModal({open, handleModal}) {
  const {likeItems}=useContext(UseMainContext)

  return (
    <>
      
      <Dialog open={open} handler={handleModal}>
        <DialogHeader>Its a likebox</DialogHeader>
        <DialogBody>
         <div className="flex flex-col gap-4 h-[500px] overflow-y-auto">
           {
            likeItems.map(el=>(
              <LikeItems key={el.id} {...el}/>
            ))
           }
           
         </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={handleModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          
        </DialogFooter>
      </Dialog>
    </>
  );
}