import { styled } from '../../styles/index'

export const FileInputWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '$4',

    color: '$white',
    fontFamily: '$default',
    fontSize: '$lg',

    variants: {
        variant: {
            primary: {
                backgroundColor: '$zinc950',
                borderRadius: '$sm',
                border: '3px dashed $red600',
    
                maxWidth: '750px',
                width: '100%',
                height: '$64',
            },
        }
    },

    defaultVariants: {
        variant: 'primary',
    },
})

export const DragAndDropContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    'span': {
        marginTop: '$4',
    },

    'span:first-of-type': {
        marginBottom: '$8',
    },

    'span:last-of-type': {
        color: '$neutral400',
    },
})

export const DragActive = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2'
})

FileInputWrapper.displayName = 'DragAndDropInput'
