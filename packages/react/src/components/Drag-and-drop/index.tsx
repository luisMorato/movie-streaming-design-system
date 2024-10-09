import { ComponentProps } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'
import { MdOutlineFileDownload } from 'react-icons/md'

import { DragActive, DragAndDropContent, FileInputWrapper } from './style'
import { Button } from '../Button/style'

export type dragAndDropProps = ComponentProps<typeof FileInputWrapper> & {
    handleDrop: (files: File[]) => void
}

export const DragAndDrop = ({ handleDrop }: dragAndDropProps) => {
    const { getRootProps, getInputProps, isDragActive  } = useDropzone({
        onDrop: (acceptedFiles: File[]) => {
            handleDrop(acceptedFiles)
        },
    })

    return (
        <FileInputWrapper {...getRootProps()}>
            <input
                {...getInputProps()}
            />
            {!isDragActive ? (
                <DragAndDropContent>
                    <FiUploadCloud size={36} />
                    <span>Drag Files to Upload</span>
                    <Button>Browse Files</Button>
                    <span>(MP4)</span>
                </DragAndDropContent>) :
                (
                    <DragActive>
                        <MdOutlineFileDownload size={36} />
                        <span>Drop Your File Here</span>
                    </DragActive>
                )
            }
        </FileInputWrapper>
    )
}