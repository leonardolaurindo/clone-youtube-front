
import { ChanelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";


function VideoComponent() {
    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" />
            <TitleContainer >
                <ChanelImage>
                    LL
                </ChanelImage>
                <TextContainer>
                    <Title>
                        Xica Preta - Bodão - Decretos Plebe 69
                    </Title>
                    <TextCard>
                        Xica Preta - Canal
                    </TextCard>
                    <TextCard>
                        666m views - há 69 meses
                    </TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;