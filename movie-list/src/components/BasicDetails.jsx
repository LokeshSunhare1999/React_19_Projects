import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0px;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${(props) =>
        props.$flexDirection ? props.$flexDirection : 'row'};
  gap: ${(props) => props.$gap ?? null};
`;

const StyledField = styled.div`
  font-size: ${(props) => props.$fontSize || '14px'};
  line-height: ${(props) => props.$lineHeight || '24px'};
  min-width: ${(props) => props.$width || 'auto'};
  font-weight: ${(props) => props.$fontWeight || 400};
  color: ${(props) => props.$color || '#666666'};
`;
  
const Separator = styled.div`
  margin: 8px 0;
`;


const bankAccountData = [
  { label: 'Genres', value: 'Adventure, Action, Drama' },
  { label: 'Overview', value: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake.' },
  { label: 'Release date', value: 'December 26, 2024 (Worldwide)' },
  { label: 'Countries', value: 'United States, Canada, UAE, Hungary, Italy, New Zealand' },
  { label: 'Status', value: 'Released' },
  { label: 'Language', value: 'English, Korean, Hindi, Arabic, German, Spanish' },
  { label: 'Budget', value: '$21.4 million' },
  { label: 'Revenue', value: '$900 million' },
  { label: 'Tagline', value: '45.6 Billion Won is Child’s Play' },
  { label: 'Production Companies', value: 'Legendary Entertainment, Warner Bros. Entertainment, Villeneuve Films' }
];


const BasicDetails = () => {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1)
  }
  return (
    <div className="basic-details">
      <div className="visit-homepage">
        <button className="visit-homepage-btn" onClick={handleBack}>
          Visit Homepage →
        </button>
      </div>
      <Wrapper>
            {bankAccountData.map((item, index) => (
                <React.Fragment key={index}>
                    <ContentSection>
                        <StyledField $fontWeight={400} $color={'#A8B5DB'} $width={'30%'}>
                            {item.label}
                        </StyledField>
                        <StyledField $color={'#D6C7FF'}>
                            {item.value}
                        </StyledField>
                    </ContentSection>
                    {index < bankAccountData.length - 1 && <Separator />}
                </React.Fragment>
            ))}
        </Wrapper>
    </div>
  );
};

export default BasicDetails;
