import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.overrideStyles = () => {
    return {
        h1:{
            fontFamily:'S-CoreDream-8Heavy',
            paddingBottom: '3px',
            marginBottom:'30px'
        },
        blockQuote: {
            marginLeft: '0px',
            paddingLeft:'0.625rem',
            borderLeft:'3px solid black',
            height:'2rem'
        },
        'blockQuote>p':{
            paddingTop:'0.7em',
        }
    }
}

const typography = new Typography(githubTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography