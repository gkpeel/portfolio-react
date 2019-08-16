import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Section from '../../components/Section';
import ContentHeader from '../../components/ContentHeader';
import ResumePdfLetter from '../../pdf/geoffreyPeel-resume-letter-201908.pdf';
import ResumePdfLegal from '../../pdf/geoffreyPeel-resume-legal.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DownloadButton = styled(Button)`
	background-color: #ff00ff;
	display: block;
	width: 100%;
	margin-bottom: 2.5rem;
	margin-top: 1rem;
	border-color: #ff00ff;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	padding: 0.5rem 1rem;
	text-align: center;
	color: rgb(20, 20, 25) !important;
	font-family: 'Permanent Marker', sans-serif;
	font-size: 1.25rem;
	font-weight: 400;
	text-decoration: none;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	line-height: 1.5;
	cursor: pointer;
	transition: color 0.15s ease-in-out, background-color 300ms ease-in-out, border-color 300ms ease-in-out, box-shadow 300ms ease-in-out;

	& .cta-icon {
		margin-left: 0.5rem;
		transition: transform 300ms ease-out;
	}

	&:hover {
		color: rgba(255, 255, 255, 1) !important;
		background-color: rgba(255, 0, 255, 0.9);
		border-color: rgba(255, 0, 255, 0.2);
		text-decoration: none;

		& .cta-icon {
			transform: scale(1.15);
		}
	}

	@media (min-width: 786px) {
		width: 50%;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 991px) {
		padding: 0.5rem 1rem;
		font-size: 2rem;
	}

	@media (min-width: 1280px) {
		padding: 0.5rem 1rem;
	}
`;

class Resume extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<Section>
				<Row>
					<Col xs="12">
						<ContentHeader>Resume</ContentHeader>
					</Col>
					<Col xs={{ span: '12', order: '3' }} lg={{ span: '10', offset: '1', order: '2' }} xl={{ span: '8', offset: '2' }}>
						<embed src={ResumePdfLegal} type="application/pdf" width="100%" height="793" />
					</Col>
					<Col xs={{ span: '12', order: '2' }} lg={{ span: '10', offset: '1', order: '3' }} xl={{ span: '8', offset: '2' }}>
						<DownloadButton href={ResumePdfLetter} download>
							Download Resume <FontAwesomeIcon className="cta-icon" icon="file-download" />
						</DownloadButton>
					</Col>
				</Row>
			</Section>
		);
	}
}

export default Resume;
