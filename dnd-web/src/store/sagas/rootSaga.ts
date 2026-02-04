import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure } from '@store/slices/projectsSlice';
import { submitFormRequest, submitFormSuccess, submitFormFailure } from '@store/slices/contactSlice';
import type { Project } from '@/types/index';

// ─────────────────────────────────────────────
// MOCK DATA — Replace with real API calls later
// ─────────────────────────────────────────────

const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'The Emerald Residence',
    location: 'Chennai',
    type: 'villa',
    status: 'completed',
    companyId: 'dnd-construction',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-d2e183aa142e?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: 'A breathtaking 4,200 sq.ft luxury villa with infinity pool and panoramic views.',
    year: 2023,
    area: '4,200 sq.ft',
  },
  {
    id: 'proj-2',
    title: 'Kodai Cloud Villa',
    location: 'Kodaikanal',
    type: 'villa',
    status: 'completed',
    companyId: 'dnd-construction',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad68e1e76e?w=600&q=80',
    description: 'A serene hilltop villa nestled in the misty forests of Kodaikanal.',
    year: 2024,
    area: '3,200 sq.ft',
  },
  {
    id: 'proj-3',
    title: 'Coimbatore Tech Hub',
    location: 'Coimbatore',
    type: 'commercial',
    status: 'ongoing',
    companyId: 'dnd-construction',
    thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    description: 'A modern 6-story commercial complex with state-of-the-art facilities.',
    year: 2025,
    area: '12,800 sq.ft',
  },
  {
    id: 'proj-4',
    title: 'Madurai Heritage Home',
    location: 'Madurai',
    type: 'renovation',
    status: 'completed',
    companyId: 'dnd-construction',
    thumbnail: 'https://images.unsplash.com/photo-1564013799819-ab600027d831?w=600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-d2e183aa142e?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1564013799819-ab600027d831?w=800&q=80',
    description: 'A complete restoration of a 90-year-old heritage property into a modern luxury home.',
    year: 2023,
    area: '2,100 sq.ft',
  },
  {
    id: 'proj-5',
    title: 'Tirunelveli Luxury Apartments',
    location: 'Tirunelveli',
    type: 'apartment',
    status: 'upcoming',
    companyId: 'dnd-construction',
    thumbnail: 'https://images.unsplash.com/photo-1493885373674-40bb357c8cba?w=600&q=80',
    description: 'A premium 24-unit luxury apartment complex with rooftop amenities.',
    year: 2025,
    area: '18,400 sq.ft',
  },
  {
    id: 'proj-6',
    title: 'Theni Countryside Villa',
    location: 'Theni',
    type: 'villa',
    status: 'ongoing',
    companyId: 'danish-design',
    thumbnail: 'https://images.unsplash.com/photo-1505713182810-6adf6c7e14c0?w=600&q=80',
    description: 'An architecturally stunning villa designed by Danish Design Studio in the rolling hills of Theni.',
    year: 2025,
    area: '2,800 sq.ft',
  },
];

// ─────────────────────────────────────────────
// PROJECTS SAGA
// ─────────────────────────────────────────────

function* fetchProjectsSaga() {
  try {
    // Simulate network delay (remove when real API is connected)
    yield delay(600);

    // TODO: Replace with actual API call
    // const response = yield call(api.getProjects);
    const projects: Project[] = MOCK_PROJECTS;

    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch projects';
    yield put(fetchProjectsFailure(message));
  }
}

// ─────────────────────────────────────────────
// CONTACT SAGA
// ─────────────────────────────────────────────

function* submitContactSaga() {
  try {
    // Simulate form submission delay
    yield delay(1200);

    // TODO: Replace with actual API call
    // yield call(api.submitContact, formData);

    yield put(submitFormSuccess());
  } catch (error) {
    yield put(submitFormFailure());
  }
}

// ─────────────────────────────────────────────
// ROOT SAGA — Watches for action types
// ─────────────────────────────────────────────

export default function* rootSaga() {
  yield takeLatest(fetchProjectsRequest.type, fetchProjectsSaga);
  yield takeLatest(submitFormRequest.type, submitContactSaga);
}