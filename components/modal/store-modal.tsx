"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "../ui/modal"

export const StoreModal =() =>{
    const StoreModal = useStoreModal()

    return(
        <Modal title='this is title' description='desc sad' onClose={StoreModal.onClose} isOpen={StoreModal.isOpen} >kalash</Modal>
    )
}