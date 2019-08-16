import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ContentBox from '../../components/ContentBox';
import LinkDiv from '../../components/LinkDiv';

const Proj = styled(Col)`
	margin-bottom: 2rem;
`;

const ProjectCard = props => {
	return (
		<Proj xs={12} md={6}>
			<ContentBox>
				<Row>
					<Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
						<p>{props.children}</p>
					</Col>
					<Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
						<a href={props.link} target="_blank">
							<img className="img-fluid" src={props.image} alt="Project Screen Shot" />
						</a>
						<LinkDiv link={props.link} repo={props.repo} />
					</Col>
				</Row>
			</ContentBox>
		</Proj>
	);
};

export default ProjectCard;
